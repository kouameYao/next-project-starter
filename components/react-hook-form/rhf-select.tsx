import React from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { InputLabel } from '../shared/InputLabel';

interface SelectOption {
  key: string;
  value: string;
}

interface RHFSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
  required?: boolean;
  className?: string;
  showError?: boolean;
}

export function RHFSelect<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = 'Choisir',
  options,
  disabled = false,
  required = false,
  className = '',
  showError = false
}: RHFSelectProps<T>) {
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
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={disabled}
              >
                <SelectTrigger
                  className={`h-[3rem] w-full border border-input bg-white ${
                    (error || showError) && '!border-[#e95d5d]'
                  } px-5 text-sm font-light ${className}`}
                >
                  <SelectValue
                    placeholder={placeholder}
                    className="placeholder:text-[10px] placeholder:text-[#BABABA]"
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#fff]">
                  {options.map((option, index) => (
                    <SelectItem
                      key={index}
                      className="px-7 font-light focus:bg-gray-100"
                      value={option.key}
                    >
                      {option.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
