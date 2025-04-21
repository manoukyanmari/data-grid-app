# 📊 Interactive Data Grid Component

An Nx-monorepo-based interactive React Data Grid with backend support and multi-user inline editing.

## 📦 Project Structure

```
.
├── backend/             # Node.js + Express API
├── frontend/            # React frontend using Vite
├── backend-e2e/         # E2E tests (if applicable)
├── package.json         # Monorepo root with Nx config
└── nx.json              # Nx workspace definition
```

## ⚙️ Requirements

- Node.js >= 18
- Yarn or npm
- Port `3000` (backend) and `4200` (frontend) must be free

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

> Or use yarn:

```bash
yarn install
```

### 2. Start Backend (Express API)

```bash
nx serve backend
```

Runs at: [http://localhost:3000](http://localhost:3000)

Endpoints:
- `GET /api/users`: Returns list of sample users

### 3. Start Frontend (React App)

```bash
nx serve frontend
```

Runs at: [http://localhost:4200](http://localhost:4200)

Make sure backend is running too — the frontend queries it at port `3000`.

## 🧩 Features

- 🌈 Virtualized React data grid using `react-window`
- 🧠 Inline editing via custom cell editors (`MultiUserEditor`)
- 🖼 User avatars and multi-select UI with `react-select`
- ✏️ Edit icon appears on hover
- ❌ X icon to cancel cell editing
- ⚡ Fast rendering with `useMemo` and data virtualization

## 🔌 API Summary

The backend provides mock user data:

```ts
GET /api/users

[
  { id: 1, name: 'Mariam', avatar: 'https://i.pravatar.cc/150?u=mariam' },
  { id: 2, name: 'Kaitlyn', avatar: 'https://i.pravatar.cc/150?u=kaitlyn' },
  { id: 3, name: 'Narek', avatar: 'https://i.pravatar.cc/150?u=narek' }
]
```

## 💡 How It Works

- **Frontend UI** loads columns and rows and displays editable cells
- **Assignee column** uses `MultiUserEditor` for inline multi-select
- Clicking ✏️ icon or double-clicking cell enters edit mode
- The edited data is updated in state (optionally saved via API)

## 📜 Available Scripts

From root (`package.json`):

| Script              | Description                        |
|---------------------|------------------------------------|
| `nx serve backend`  | Start backend server on port 3000  |
| `nx serve frontend` | Start Vite-powered React frontend |
| `nx test frontend`  | Run unit tests                     |
| `nx lint frontend`  | Run ESLint                         |
| `nx build frontend` | Build frontend (Vite)              |

## 🔧 Developer Notes

- Built with Nx monorepo setup
- ESLint and Prettier are pre-configured
- TypeScript is enabled across the stack
- Uses `axios` for API communication
- UI components from `@mui/material` and `react-select`

## 📍Ports

| App       | Port   |
|-----------|--------|
| Backend   | `3000` |
| Frontend  | `4200` |
