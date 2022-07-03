export default function Footer() {
  return (
    <div className="bg-white dark:bg-transparent border-t border-slate-100 dark:border-slate-700 text-black dark:text-slate-400 py-3 text-sm">
      <div className="container mx-auto">
        <span>Atvyl ®{new Date().getFullYear()} All right reserved</span>
      </div>
    </div>
  );
}
