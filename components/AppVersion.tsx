import { getName } from '@tauri-apps/api/app'

const AppVersion = () => <p className="text-sm text-muted-foreground">{getName()}</p>

export default AppVersion
