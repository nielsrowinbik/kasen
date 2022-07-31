import { useState } from 'react';
import type { ReactNode } from 'react';
import { Switch } from '@headlessui/react';

// TODO: Restyle to an actual tickmark instead of an on-off toggle

type Checkbox = {
  children?: ReactNode;
};

const Checkbox = ({ children }: Checkbox) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Switch.Group>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white`}
          />
        </Switch>
        <Switch.Label>{children}</Switch.Label>
      </Switch.Group>
    </div>
  );
};

export default Checkbox;
