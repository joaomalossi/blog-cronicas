export function caminhoImagem(caminhoRelativo: string): string {
  if (!caminhoRelativo) return '';
  const semPrefixo = caminhoRelativo.replace(/^imagens\//, '');
  const comExtensaoWebp = semPrefixo.replace(/\.(png|jpe?g)$/i, '.webp');
  return `${import.meta.env.BASE_URL}img/${comExtensaoWebp}`;
}
