import PropTypes from 'prop-types';
import { TitleContainer, TitleSection } from './SectionTitle.styled';

const SectionTitle = ({ title, children }) => (
  <TitleContainer>
    {title && <TitleSection>{title}</TitleSection>}
    {children}
  </TitleContainer>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SectionTitle;
