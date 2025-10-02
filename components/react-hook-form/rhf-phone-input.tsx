import React from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { defaultCountries, parseCountry } from 'react-international-phone';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';

import { InputLabel } from '../shared/InputLabel';

const PhoneInput = React.lazy(() =>
  import('react-international-phone').then((module) => ({
    default: module.PhoneInput
  }))
);

const order = ['ci', 'sn', 'bj', 'bf', 'gn', 'cm'];

const countries = defaultCountries
  .filter((country) => {
    const { iso2 } = parseCountry(country);
    return order.includes(iso2);
  })
  .sort((a, b) => {
    const isoA = parseCountry(a).iso2;
    const isoB = parseCountry(b).iso2;
    return order.indexOf(isoA) - order.indexOf(isoB);
  });

interface RHFPhoneInputProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  defaultCountry?: string;
  showError?: boolean;
}

export function RHFPhoneInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = 'Numéro de téléphone',
  disabled = false,
  required = false,
  defaultCountry = 'ci',
  showError = false
}: RHFPhoneInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <div className="space-y-1">
            <InputLabel htmlFor={name} required={required}>
              {label}
            </InputLabel>
            <FormControl>
              <React.Suspense fallback={<div>Loading...</div>}>
                <PhoneInput
                  {...field}
                  className={`font-light placeholder:text-[10px] placeholder:text-[#BABABA] ${(error || showError) && '!border-[#e95d5d]'}`}
                  style={
                    {
                      '--react-international-phone-text-color': '#000',
                      '--react-international-phone-border-color':
                        error || showError ? '#e95d5d' : '#f0f0f0',
                      '--react-international-phone-height': '3.3rem',
                      '--react-international-phone-font-size': '14px',
                      '--react-international-phone-border-radius': '0.75rem'
                    } as React.CSSProperties
                  }
                  defaultCountry={defaultCountry}
                  placeholder={placeholder}
                  disabled={disabled}
                  countries={countries}
                />
              </React.Suspense>
            </FormControl>
            {error && (
              <FormMessage className="error-msg">{error.message}</FormMessage>
            )}
          </div>
        </FormItem>
      )}
    />
  );
}
