const size = {
  xs: '384px',
  sm: '576px',
  md: '768px',
  lg: '992px',
}

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
}

const breakpoints = {size, device}

export default breakpoints