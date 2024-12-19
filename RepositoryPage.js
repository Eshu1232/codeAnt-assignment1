import React from 'react';
import './RepositoryPage.scss';

const RepositoryPage = () => {
  return (
    <div className="repository-page">
      <header>
        <h1>Repositories</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Repo 1</td>
            <td>Sample description</td>
            <td><button>View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RepositoryPage;
