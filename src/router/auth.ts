export function isAuthed(): boolean {
  return typeof localStorage.getItem('token') === 'string';
}
