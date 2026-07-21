import { officeMap } from '@/data/contact.data';

export function OfficeMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <iframe
        title={`Map showing the ${officeMap.address} office`}
        src={officeMap.embedSrc}
        className="h-72 w-full grayscale invert-[0.92] contrast-[1.1] sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
