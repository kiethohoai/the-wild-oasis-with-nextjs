'use client';

import { useState } from 'react';

export default function Counter({ users }) {
  console.log(`🚀CHECK > users:`, users);

  const [count, setCount] = useState(0);

  return (
    <div>
      <span>Users: {users.length}</span>
      <br />
      <span>Counter: {count}</span>{' '}
      <button onClick={(c) => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
