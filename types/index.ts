import { ChangeEvent, MouseEventHandler } from 'react';

export interface CustomButtonProps {
    title : string;
    containerStyles ?: string;
    handleClick ?: MouseEventHandler<HTMLButtonElement>;
    btnType ?: "button" | "submit"; 
    textStyles ?: string;
    rightIcon ?: string;
    isDisabled ?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer : string;
    setManufacturer : (manufacturer: string) => void;
}

export interface CarProps {
    mainImage: string,
    subImage1: string,
    subImage2: string,
    subImage3: string,
    class: string,
    price: number,
    drive: string,
    fuel_type: string,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    fuel?: string;
    model?: string;
    limit?: number;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionsProps {
    name: string;
    value: string;
}

export interface CustomInputProps {
    name: string;
    options: OptionsProps[];
    handleChange: (event: {name: string ,title: string, value: string}) => void;
    otherClasses: string; 
    title: string;
}

export interface DatePickerProps {
    name: string;
    title: string;
    onChange: (event: {title: string, value: string}) => void;
}

export interface CustomFilterProps {
    title: string;
    options: OptionsProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
};

export interface SendMailProps {
    to : string
    name : string
    subject : string
    body?: string | Promise<string>; // Hem string hem Promise<string> kabul eder
}

export interface MailTemplateProps {
    name: string;
    lastName: string;
    price: string;
    pickupLocation: string;
    pickupTime: string;
}