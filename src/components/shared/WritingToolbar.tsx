'use client';
import React, { useEffect, useState } from 'react';
import { Bold, Italic, Underline, List, Link as LinkIcon, Minus } from 'lucide-react';

interface WritingToolbarProps {
  editorRef: React.RefObject<HTMLDivElement>;
  onCommand: (command: string, value?: string) => void;
  isMobile?: boolean;
}

export default function WritingToolbar({ editorRef, onCommand, isMobile = false }: WritingToolbarProps) {
  const [activeStates, setActiveStates] = useState({
    bold: false,
    italic: false,
    underline: false,
    list: false,
  });

  const checkCommandStates = () => {
    if (typeof document === 'undefined') return;
    setActiveStates({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      list: document.queryCommandState('insertUnorderedList'),
    });
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      // Check if focus is inside our editor
      if (editorRef.current && editorRef.current.contains(document.activeElement)) {
        checkCommandStates();
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [editorRef]);

  const handleLinkClick = () => {
    const url = prompt('Enter the link URL:');
    if (url) {
      // Normalize URL
      let formattedUrl = url;
      if (!/^https?:\/\//i.test(url)) {
        formattedUrl = 'https://' + url;
      }
      onCommand('createLink', formattedUrl);
    }
  };

  const buttonClass = (isActive: boolean) => `
    p-1.5 rounded transition-all hover:bg-[var(--bg-tertiary)]
    ${isActive ? 'text-[var(--accent-saffron)] bg-[var(--bg-tertiary)]' : 'text-[var(--text-muted)]'}
  `;

  // Standard commands
  const triggerCommand = (cmd: string, val: string = '') => {
    onCommand(cmd, val);
    setTimeout(checkCommandStates, 50);
  };

  return (
    <div
      className={`
        flex items-center gap-1 p-1 border rounded-lg shadow-sm backdrop-blur-md
        ${isMobile 
          ? 'fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[var(--bg-secondary)] border-[var(--border-default)] w-[90%] max-w-sm justify-around shadow-lg' 
          : 'bg-[var(--bg-secondary)] border-[var(--border-default)] w-max'
        }
      `}
    >
      <button
        type="button"
        onClick={() => triggerCommand('bold')}
        className={buttonClass(activeStates.bold)}
        title="Bold (Cmd+B / Ctrl+B)"
      >
        <Bold size={16} />
      </button>

      <button
        type="button"
        onClick={() => triggerCommand('italic')}
        className={buttonClass(activeStates.italic)}
        title="Italic (Cmd+I / Ctrl+I)"
      >
        <Italic size={16} />
      </button>

      <button
        type="button"
        onClick={() => triggerCommand('underline')}
        className={buttonClass(activeStates.underline)}
        title="Underline (Cmd+U / Ctrl+U)"
      >
        <Underline size={16} />
      </button>

      <div className="w-[1px] h-4 bg-[var(--border-default)] mx-1" />

      <button
        type="button"
        onClick={() => triggerCommand('insertUnorderedList')}
        className={buttonClass(activeStates.list)}
        title="Bullet List"
      >
        <List size={16} />
      </button>

      <button
        type="button"
        onClick={handleLinkClick}
        className={buttonClass(false)}
        title="Add Link"
      >
        <LinkIcon size={16} />
      </button>

      <button
        type="button"
        onClick={() => triggerCommand('insertHTML', '<p>* * *</p>')}
        className={buttonClass(false)}
        title="Scene Divider"
      >
        <Minus size={16} />
      </button>
    </div>
  );
}
