import Footer from '../common/footer';
import TopBar from '../common/topBar';

export default function DefaultLayout({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <>
      <header>
        <TopBar />
      </header>

      <div>
        <main className="my-8">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>

      <footer className="mt-auto block">
        <Footer />
      </footer>
    </>
  );
}
