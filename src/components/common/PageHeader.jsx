import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PageHeader = ({ title, subtitle, breadcrumbs = [], actions }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ mb: 3 }}>
      {breadcrumbs.length > 0 && (
        <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 0.5 }}>
          {breadcrumbs.map((crumb, i) =>
            crumb.path ? (
              <Link
                key={i} underline="hover" color="inherit"
                sx={{ cursor: 'pointer', fontSize: '0.8rem' }}
                onClick={() => navigate(crumb.path)}
              >
                {crumb.label}
              </Link>
            ) : (
              <Typography key={i} color="text.primary" fontSize="0.8rem">{crumb.label}</Typography>
            )
          )}
        </Breadcrumbs>
      )}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h5" fontWeight={700}>{title}</Typography>
          {subtitle && <Typography variant="body2" color="text.secondary" mt={0.5}>{subtitle}</Typography>}
        </Box>
        {actions && <Box sx={{ display: 'flex', gap: 1 }}>{actions}</Box>}
      </Box>
    </Box>
  );
};

export default PageHeader;
