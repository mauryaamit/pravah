export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F0E8] px-6 text-center select-none">
      <img src="/pravah-logo.svg" alt="Pravah" className="w-20 h-20 mb-8 opacity-60" />
      <h1 className="text-4xl font-light text-[#1E1810] mb-3 font-serif" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
        प्रवाह
      </h1>
      <p className="text-base text-[#6B5A47] mb-2 font-serif">You are offline.</p>
      <p className="text-sm text-[#6B5A47] italic font-serif">
        Pravah is waiting. Connect and return.
      </p>
    </div>
  );
}
