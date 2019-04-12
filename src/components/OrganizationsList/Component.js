import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class OrganizationsList extends Component {
  static propTypes = {
    organization: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    loadOrganizations: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  componentDidMount() {
    const { loadOrganizations } = this.props;
    loadOrganizations();
  }

  render() {
    const { loading, loaded, error, organization } = this.props;
    if (loading) return this.renderLoading();
    if (error) return this.renderError(error);

    return (
      loaded && (
        <div>
          <ul>
            {organization.map(elem => {
              return (
                <li key={elem.id}>
                  <h3>{elem.name}</h3>
                  <p>{elem.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )
    );
  }
  renderError = error => {
    return <h3>{error}</h3>;
  };

  renderLoading = () => {
    return <h3>Loading...</h3>;
  };
}
