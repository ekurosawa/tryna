// src/components/common/HitComponent

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

function HitComponent({ hit }){
  return (
    <div>
      <Link href={hit.url}>
        <a className="hover:text-[#06bbbc]">{hit.title}</a>
      </Link>
    </div>
  );
}

export const hitComponent = ({ hit })=> (
  <HitComponent hit={hit} onClick={() => null} />
);