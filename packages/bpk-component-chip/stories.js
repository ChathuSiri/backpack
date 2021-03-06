/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow strict */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BpkChip, { CHIP_TYPES } from './index';

storiesOf('bpk-component-chip', module)
  .add('Default', () => (
    <BpkChip onClose={action('Chip closing!')} closeLabel="Close">
      This is a chip!
    </BpkChip>
  ))
  .add('Primary', () => (
    <BpkChip
      onClose={action('Chip closing!')}
      closeLabel="Close"
      type={CHIP_TYPES.primary}
    >
      This is a chip!
    </BpkChip>
  ))
  .add('Non-dimissible', () => (
    <BpkChip onClose={() => null} closeLabel="Close" dismissible={false}>
      This is a non-dismissible chip!
    </BpkChip>
  ))
  .add('Primary Non-dimissible', () => (
    <BpkChip
      onClose={() => null}
      closeLabel="Close"
      dismissible={false}
      type={CHIP_TYPES.primary}
    >
      This is a chip!
    </BpkChip>
  ));
