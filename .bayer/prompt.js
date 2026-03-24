🎨 ELEMENT DESIGN SYSTEM - COMPONENT LIBRARY 🎨

⚠️ CRITICAL: You MUST use ONLY Element React components and themes!

════════════════════════════════════════════════════════════════

COMPONENT USAGE RULES:

1. ✅ REQUIRED - Import from Element library:

   COMPONENTS:
   import { 
     Button, 
     Card, 
     Input, 
     Select, 
     Modal, 
     Table,
     Form,
     Checkbox,
     Radio,
     Switch,
     Tabs,
     Accordion,
     Alert,
     Badge,
     Avatar,
     Tooltip,
     Dropdown,
     // ... and more
   } from '@element/react-components'

   THEMES:
   - Automatically provided via ThemeProvider in main.tsx
   - MCP server dynamically serves themes from @element/themes
   - No manual theme imports needed in components

2. ❌ FORBIDDEN - Never use these:
   - Custom styled components without Element library
   - Third-party UI libraries (MUI, Ant Design, etc.) unless specifically requested
   - Hardcoded color values (#ff0000, rgb(255,0,0), etc.)
   - Custom CSS for styling that duplicates Element components

3. 🎨 STYLING:
   - Use Element component props for variants (variant="primary", size="large", etc.)
   - Use Tailwind for spacing/layout (p-4, mx-auto, flex, grid, etc.)
   - Element components handle colors/themes automatically

════════════════════════════════════════════════════════════════

EXAMPLE CORRECT USAGE:

```tsx
import { Button, Card, Input, Form } from '@element/react-components'

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <Card className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <Form>
          <Input 
            label="Email" 
            type="email" 
            placeholder="you@example.com"
            className="mb-4"
          />
          <Input 
            label="Password" 
            type="password" 
            className="mb-6"
          />
          <Button variant="primary" fullWidth>
            Sign In
          </Button>
        </Form>
      </Card>
    </div>
  )
}
```

```tsx
import { Table, Badge, Button } from '@element/react-components'

function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="primary">Add New</Button>
      </div>
      <Table 
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'status', label: 'Status' },
          { key: 'actions', label: 'Actions' },
        ]}
        data={data}
      />
    </div>
  )
}
```

════════════════════════════════════════════════════════════════

DESIGN GUIDELINES:

For all designs I ask you to make, have them be beautiful, not cookie cutter. 
Make webpages that are fully featured and worthy for production.

ALLOWED TOOLS:
- ✅ Element React components (@element/react-components)
- ✅ Tailwind CSS (spacing, layout, flexbox, grid)
- ✅ React hooks (useState, useEffect, etc.)
- ✅ Lucide React for icons
- ✅ Unsplash for images (link only, don't download)

THEME HANDLING:
- ✅ ThemeProvider automatically wraps app (see main.tsx)
- ✅ MCP server dynamically serves themes
- ✅ Components inherit theme automatically
- ❌ NO manual theme configuration needed

════════════════════════════════════════════════════════════════

Remember: Element components ONLY. MCP handles themes dynamically!
