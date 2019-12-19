import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';


import './collections-overview.styles.scss';
import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionsOverview = () => {

  const collections = useContext(CollectionsContext);
  const arrayOfCollections = Object.keys(collections).map(key => collections[key])

  return(
  <div className='collections-overview'>
    {arrayOfCollections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)
};

export default CollectionsOverview;
