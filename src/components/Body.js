import PropTypes from 'prop-types';
import {
  SQAdminPageLayout,
  SQAdminMainContent,
} from 'scplus-shared-components';

export default function Body({ children }) {
  return (
    <SQAdminPageLayout>
      <SQAdminMainContent>{children}</SQAdminMainContent>
    </SQAdminPageLayout>
  );
}

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired,
};
