import React from 'react';

const withLayoutContent = StyledComp => {
  const withLayoutContent = ({ children, ...styles } ) => (
    <StyledComp
      {...styles}
    >
      {children}
    </StyledComp>
  );
  
  return withLayoutContent;
};

export default withLayoutContent;
