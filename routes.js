module.exports = (router, methods) => 
{
    router.get('/search', methods.getPerson);

    return router;
};