import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// material
import { Box } from '@material-ui/core';
import Head from 'next/head';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
