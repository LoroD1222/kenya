import Image from "next/image";

export type Pharmacy = {
  name: string;
  address: string;
  hours?: string;
};

export function PharmacyCard({ pharmacy, index }: { pharmacy: Pharmacy; index: number }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${pharmacy.name}, ${pharmacy.address}, Nairobi, Kenya`
  )}`;

  return (
    <article className="pharmacy-card">
      <div className="pharmacy-card-topline">
        <h3>{pharmacy.name}</h3>
        <span className="pharmacy-number" aria-label={`Pharmacy ${index}`}>
          <Image src="/assets/number-circle.svg" alt="" fill sizes="22px" />
          <span>{index}</span>
        </span>
      </div>
      <p className="pharmacy-detail">
        <Image src="/assets/location.svg" alt="" width={16} height={16} />
        <span>{pharmacy.address}</span>
      </p>
      <p className="pharmacy-detail">
        <Image src="/assets/time.svg" alt="" width={16} height={16} />
        <span>{pharmacy.hours ?? "Saturday, 09:00–16:00"}</span>
      </p>
      <a className="directions-button" href={mapUrl} target="_blank" rel="noreferrer">
        Directions
      </a>
    </article>
  );
}
