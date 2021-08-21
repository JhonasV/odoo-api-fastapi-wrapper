

  export interface IEventsOut {
    id: number;
    name: string;
    active: boolean;
    company_id: any[];
    organizer_id: any[];
    date_begin: Date;
    date_end: Date;
    kanban_state_label: string;
    event_logo: number;
    is_published: boolean;
    description: string;
    seats_max: number;
    seats_available: number;
    seats_reserved: number;
    menu_register_cta: boolean;
}


export interface IEventsIn {
  id: number;
  name: string;
  active: boolean;
  company_id: number;
  organizer_id: number;
  date_begin: Date | string;
  date_end: Date | string;
  description: string;
  seats_max: number,
  seats_limited: boolean
}

