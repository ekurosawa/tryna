import Link from '@mui/material/Link';
import { Hit } from 'react-instantsearch-core';

{/*
interface HitDoc {
  objectID: string;
  url: string;
  title: string;
  description: string;
  content: string;
}

interface Props {
  hit: Hit<HitDoc>;
}

interface HitComponentProps extends Props {
  onClick: () => void;
}
*/}

function HitComponent({ hit }) {
  return (
<div>
    <Link
      href={hit.url}
      color="#000000"
      sx={{ my: -2, mx: 1.5 }}
      style={{ textDecoration: 'none' }}>
      <a>{hit.title}</a>
    </Link>
    </div>
  );
}

export const hitComponent = ({ hit }) => (
  <HitComponent hit={hit} onClick={() => null} />
);