export type UserRole = 'admin' | 'answerer'

export interface AuthUser {
  id: string
  role: UserRole
}
