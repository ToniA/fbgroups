(() => {
  const feed = "https://www.facebook.com/groups/feed/";
  const goToFeed = () => location.replace(feed);

  if (location.pathname === "/") goToFeed();

  document.addEventListener("click", event => {
    const link = event.target instanceof Element && event.target.closest("a");
    if (link && ["/", "", "https://www.facebook.com/"].includes(link.getAttribute("href") ?? "")) {
      event.preventDefault();
      goToFeed();
    }
  }, true);
})();

