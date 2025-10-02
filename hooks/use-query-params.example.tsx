/**
 * Exemples d'utilisation des hooks nuqs
 */

'use client';

import {
  usePagination,
  useSearch,
  useFilters,
  useTab,
  useModal
} from './use-query-params';

// Exemple 1: Pagination
export function PaginationExample() {
  const { page, pageSize, setPage, setPageSize } = usePagination();

  return (
    <div>
      <p>Page courante: {page}</p>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
}

// Exemple 2: Recherche
export function SearchExample() {
  const { search, setSearch } = useSearch();

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Rechercher..."
    />
  );
}

// Exemple 3: Filtres multiples
export function FiltersExample() {
  const { filters, setFilters } = useFilters();

  return (
    <div>
      <select
        value={filters.status}
        onChange={(e) => setFilters({ status: e.target.value })}
      >
        <option value="all">Tous</option>
        <option value="active">Actif</option>
        <option value="inactive">Inactif</option>
      </select>

      <select
        value={filters.sort}
        onChange={(e) => setFilters({ sort: e.target.value })}
      >
        <option value="createdAt">Date de création</option>
        <option value="name">Nom</option>
        <option value="price">Prix</option>
      </select>
    </div>
  );
}

// Exemple 4: Tabs
export function TabsExample() {
  const { tab, setTab } = useTab('overview');

  return (
    <div>
      <button onClick={() => setTab('overview')}>Vue d'ensemble</button>
      <button onClick={() => setTab('analytics')}>Analytiques</button>
      <button onClick={() => setTab('settings')}>Paramètres</button>

      {tab === 'overview' && <div>Contenu Overview</div>}
      {tab === 'analytics' && <div>Contenu Analytics</div>}
      {tab === 'settings' && <div>Contenu Settings</div>}
    </div>
  );
}

// Exemple 5: Modal avec URL state
export function ModalExample() {
  const { isOpen, open, close } = useModal('createEvent');

  return (
    <div>
      <button onClick={open}>Ouvrir Modal</button>
      {isOpen && (
        <div className="modal">
          <h2>Créer un événement</h2>
          <button onClick={close}>Fermer</button>
        </div>
      )}
    </div>
  );
}

// Exemple 6: Utilisation combinée
export function CompleteExample() {
  const { page, setPage } = usePagination();
  const { search, setSearch } = useSearch();
  const { filters, setFilters } = useFilters();

  // Toutes les query params sont synchronisées avec l'URL
  // URL ressemblera à: /events?page=2&search=concert&status=active&sort=price

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher..."
      />

      <select
        value={filters.status}
        onChange={(e) => setFilters({ status: e.target.value })}
      >
        <option value="all">Tous</option>
        <option value="active">Actif</option>
      </select>

      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Précédent
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Suivant</button>
      </div>
    </div>
  );
}
