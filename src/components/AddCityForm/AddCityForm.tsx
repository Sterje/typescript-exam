import { useState } from 'react';
import type { City, TimeZone } from '../../types/types';
import { v4 as uuidv4 } from 'uuid';
import './AddCityForm.css';

const timeZones: TimeZone[] = [
  'Europe/Stockholm', 'America/New_York', 'Asia/Tokyo', 'Australia/Sydney',
  'Africa/Cairo', 'Europe/London', 'America/Los_Angeles', 'Asia/Dubai',
  'Asia/Shanghai', 'Europe/Paris', 'America/Chicago', 'Asia/Kolkata',
  'Pacific/Auckland', 'Africa/Johannesburg', 'Europe/Berlin',
  'Asia/Singapore', 'America/Toronto', 'Asia/Seoul', 'Europe/Moscow'
];

const AddCityForm = () => {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState<TimeZone>('Europe/Stockholm');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage('Stadsnamn krävs.');
      return;
    }

    const newCity: City = {
      id: uuidv4(),
      name: name.trim(),
      timezone,
      isCustom: true
    };

    const existing: City[] = JSON.parse(localStorage.getItem('customCities') || '[]');

    if (existing.some(city => city.name.toLowerCase() === newCity.name.toLowerCase())) {
      setMessage('Staden finns redan.');
      return;
    }

    const updated = [...existing, newCity];
    localStorage.setItem('customCities', JSON.stringify(updated));
    setMessage(`Staden "${newCity.name}" har lagts till!`);
    setName('');
  };

  return (
    <form id="add-city-form" onSubmit={handleSubmit}>
      <h3 id="add-city-title">Add a city</h3>

      <input
        id="city-name-input"
        type="text"
        placeholder="City name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <select
        aria-label="Select timezone"
        id="timezone-select"
        value={timezone}
        onChange={e => setTimezone(e.target.value as TimeZone)}>
        {timeZones.map(zone => (
          <option key={zone} value={zone}>{zone}</option>
        ))}
      </select>

      <button id="add-city-button" type="submit" >
        Add city
      </button>

      {message && <p id="add-city-message">{message}</p>}
    </form>
  );
};

export default AddCityForm;
