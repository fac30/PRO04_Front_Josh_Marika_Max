export interface BaseEntity {
  id: number;
  created_at?: Date;
}

export interface ExpirableEntity extends BaseEntity {
  expires_at?: Date;
}

// locations table
export interface Location extends BaseEntity {
  country: string;
  region?: string;
}

export interface Customer extends BaseEntity {
  username: string;
  password_hash: string;
  salt?: string; // nullable unique
  email: string;
  phone_number?: string;
  payment_details?: string;
  date_of_birth?: Date;
  street_address: string;
  city: string;
  location_id: number; // foreign key reference to locations
}

export interface Session extends ExpirableEntity {
  customer_id: number; // foreign key reference to customers
}

export interface Genre extends BaseEntity {
  genre: string;
  genreId: number;
}

export interface Condition extends BaseEntity {
  condition: string;
}

export interface PriceRange extends BaseEntity {
  range_start: number;
  range_end: number;
  price_range: string;
}

export interface CollectionType extends BaseEntity {
  collection_type: string;
}

export interface NewRelease extends BaseEntity {
  threshold_months: number;
  new_release: string;
}

export interface TimePeriod extends BaseEntity {
  period_start: number;
  period_end: number;
  time_period: string;
}

export interface Label extends BaseEntity {
  label: string;
}

export interface Vinyl extends BaseEntity {
  stock: number;
  description?: string;
  price: number;
  artist: string;
  title: string;
  release_date: string; // Using string to match the input format
  limited_edition: boolean;
  genres: Genre; // Changed to match the nested structure
  conditions: Condition; // Changed to match the nested structure
  price_ranges: PriceRange; // Changed to match the nested structure
  collection_types: CollectionType; // Changed to match the nested structure
  new_release: boolean; // Since you already have this as a boolean in the original data
  time_periods: TimePeriod; // Changed to match the nested structure
  labels: Label; // Changed to match the nested structure
  image_url: string | null; // Keeping null as an option
  discount?: number;
  on_sale: boolean;
  quantity: number;
}

export interface Format extends BaseEntity {
  format: string;
}

export interface Disc extends BaseEntity {
  vinyl_id: number; // foreign key to vinyls
  side_a?: string;
  side_b?: string;
  format_id?: number; // foreign key to formats
  duration?: number;
}

export interface Status extends BaseEntity {
  status: string;
}

export interface ShippingOption extends BaseEntity {
  price: number;
  lead_time?: Date;
  location_id?: number; // foreign key to locations
}

export interface Transaction extends BaseEntity {
  date: Date;
  status_id?: number; // foreign key to statuses
  delivery_time?: string;
  is_sell: boolean;
  transaction_number: string;
  customer_id?: number; // foreign key to customers
  tracking_number?: number;
  shipping_options_id?: number; // foreign key to shipping_options
}

export interface Review extends BaseEntity {
  score: number;
  description?: string;
  vinyl_id?: number; // foreign key to vinyls
  transaction_id?: number; // foreign key to transactions
}

export interface TransactionVinyl extends BaseEntity {
  transactions_id: number; // foreign key to transactions
  vinyl_id: number; // foreign key to vinyls
}

export interface ShippingLocation extends BaseEntity {
  shipping_options_id: number; // foreign key to shipping_options
  location_id: number; // foreign key to locations
}

export interface FormFields {
  username: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  street_address: string;
  password_hash: string;
  password: string;
  confirm_password: string;
  city: string;
  location_id: number;
}

export interface UserObject {
  username: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  street_address: string;
  password_hash: string;
  city: string;
  location_id: number;
}

export interface SortControlsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  productsPerPage: number; // Add productsPerPage
  setProductsPerPage: (value: number) => void; // Add setProductsPerPage
}

export interface FiltersSidebarProps {
  selectedGenres: string[];
  selectedPriceRanges: string[];
  selectedTimePeriods: string[];
  onGenreChange: (genre: string) => void;
  onPriceRangeChange: (priceRange: string) => void;
  onTimePeriodChange: (timePeriod: string) => void;
}

export interface SessionResponse {
  isLoggedIn: boolean;
  user?: {
    username?: string;
    email?: string;
  };
}
