import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="d-grid gap-2 " style={{ height: '50px' }}>
        <Link className="btn btn-primary" to={'/'}>
          <i class="fas fa-home">HomePage</i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
