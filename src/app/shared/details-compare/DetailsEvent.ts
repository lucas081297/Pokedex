export interface PokeStats {
  base_stats: number,
  effort: 0,
  stat: {
    name: string,
    url: string
  }
}

export interface DetailsEvent {
  stats: Array<PokeStats>
}
