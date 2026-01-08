
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

const COUNTRIES = [
  { code: 'IN', name: 'India', flagUrl: 'https://flagcdn.com/w40/in.png' },
  { code: 'US', name: 'USA', flagUrl: 'https://flagcdn.com/w40/us.png' },
  { code: 'UK', name: 'UK', flagUrl: 'https://flagcdn.com/w40/gb.png' },
  { code: 'AE', name: 'UAE', flagUrl: 'https://flagcdn.com/w40/ae.png' },
  { code: 'CA', name: 'Canada', flagUrl: 'https://flagcdn.com/w40/ca.png' },
  { code: 'AU', name: 'Australia', flagUrl: 'https://flagcdn.com/w40/au.png' },
];

export function CountrySelector() {
  const [country, setCountry] = useState(COUNTRIES[0]);

  useEffect(() => {
    const savedCode = localStorage.getItem('quikboys-country');
    if (savedCode) {
      const savedCountry = COUNTRIES.find(c => c.code === savedCode);
      if (savedCountry) setCountry(savedCountry);
    }
  }, []);

  const handleSelect = (c: typeof COUNTRIES[0]) => {
    setCountry(c);
    localStorage.setItem('quikboys-country', c.code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 px-2 hover:bg-muted/50">
          <img src={country.flagUrl} alt={country.name} className="w-5 h-auto rounded-sm object-cover" />
          <span className="font-medium text-sm hidden sm:inline">{country.code}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        {COUNTRIES.map((c) => (
          <DropdownMenuItem
            key={c.code}
            onClick={() => handleSelect(c)}
            className="gap-3 cursor-pointer hover:bg-gray-100"
          >
            <img src={c.flagUrl} alt={c.name} className="w-6 h-auto rounded-sm shadow-sm" />
            <span className="text-sm font-medium">{c.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
