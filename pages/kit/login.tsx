
// theme
import ThemeConfig from '../../src/kit/theme';
// components
import ScrollToTop from '../../src/kit/components/ScrollToTop';
import Login from '../../src/kit/pages/Login';

// ----------------------------------------------------------------------

export default function App() {
    return (
        <ThemeConfig>
            <ScrollToTop />
            <Login />
        </ThemeConfig>
    );
}
