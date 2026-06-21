import { useState, useEffect } from 'react';

interface TimezoneConfig {
  name: string;
  zone: string;
  label: string; // Short code to save space
}

export default function WorldClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const locations: TimezoneConfig[] = [
    { name: 'Finland', zone: 'Europe/Helsinki', label: 'FIN' },
    { name: 'Norway', zone: 'Europe/Oslo', label: 'NOR' },
    { name: 'Quebec', zone: 'America/Toronto', label: 'QBC' },
    { name: 'Vancouver', zone: 'America/Vancouver', label: 'VAN' },
    { name: 'New Zealand', zone: 'Pacific/Auckland', label: 'NZ' },
  ];

  const formatTime = (date: Date, timeZone: string) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(date);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '12px',
      alignItems: 'center',
      padding: '6px 12px',
      background: '#222',
      borderRadius: '4px',
      fontSize: '0.85rem',
      fontFamily: 'monospace',
      color: '#fff',
      width: 'fit-content'
    }}>
      <span style={{ marginRight: '4px', color: '#888' }}>🌍</span>
      {locations.map((loc, idx) => (
        <div key={loc.zone} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ color: '#4da6ff', fontWeight: 'bold' }}>{loc.label}:</span>
          <span>{formatTime(time, loc.zone)}</span>
          {idx < locations.length - 1 && <span style={{ color: '#444', marginLeft: '8px' }}>|</span>}
        </div>
      ))}
    </div>
  );
}
