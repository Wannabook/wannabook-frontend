import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOrganizations, getOrganizationsLoadingProps } from 'store';
import { EntityInitialState, Organization } from 'types';

import { loadOrganizations } from '../../store/organizations/';

export const OrganizationsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOrganizations());
  }, [dispatch]);

  const { loading, loaded, error }: EntityInitialState = useSelector(
    getOrganizationsLoadingProps
  );
  const organization: Array<Organization> = useSelector(getOrganizations);

  const renderError = (error: string) => <h3>{error}</h3>;

  const renderLoading = () => <h3>Loading...</h3>;

  if (loading) return renderLoading();
  if (error) return renderError(error);

  return (
    loaded && (
      <div>
        <ul>
          {organization.map(elem => (
            <li key={elem.id}>
              <h3>{elem.name}</h3>
              <p>{elem.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
