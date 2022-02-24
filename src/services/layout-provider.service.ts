class LayoutProvider {
    async load(pageName) {
        const page = await import(`/src/pages/${pageName}/index.html?raw`);
        const app = document.querySelector('#app');

        app.innerHTML = page.default;
    }
}

export const LayoutProviderService = new LayoutProvider();
