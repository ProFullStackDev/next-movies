/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';

const CLASS_NAME = 'annotation';

const Annotation = ({
  theme,
  className,
  ...rest
}) => (
  <>
    <p
      className={clsx(CLASS_NAME, className)}
      {...rest} />
    <style jsx>{`
      .${CLASS_NAME} {
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightMedium};
        color: var(--palette-text-secondary);
      }
    `}</style>
  </>
);

export default withTheme(Annotation);
