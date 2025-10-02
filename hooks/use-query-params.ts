import {
  parseAsInteger,
  parseAsString,
  parseAsBoolean,
  useQueryState,
  useQueryStates
} from 'nuqs';

// Hook pour gérer la pagination
export function usePagination() {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
  const [pageSize, setPageSize] = useQueryState(
    'pageSize',
    parseAsInteger.withDefault(10)
  );

  return {
    page,
    pageSize,
    setPage,
    setPageSize
  };
}

// Hook pour gérer la recherche
export function useSearch() {
  const [search, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault('')
  );

  return {
    search,
    setSearch
  };
}

// Hook pour gérer les filtres
export function useFilters() {
  const [filters, setFilters] = useQueryStates({
    status: parseAsString.withDefault('all'),
    category: parseAsString.withDefault('all'),
    sort: parseAsString.withDefault('createdAt'),
    order: parseAsString.withDefault('desc')
  });

  return {
    filters,
    setFilters
  };
}

// Hook pour gérer les tabs
export function useTab(defaultTab = 'overview') {
  const [tab, setTab] = useQueryState(
    'tab',
    parseAsString.withDefault(defaultTab)
  );

  return {
    tab,
    setTab
  };
}

// Hook pour gérer les modals/dialogs
export function useModal(modalName: string) {
  const [isOpen, setIsOpen] = useQueryState(
    modalName,
    parseAsBoolean.withDefault(false)
  );

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev)
  };
}
