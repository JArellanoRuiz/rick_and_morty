const app = require('../src/app');
const session = require ('supertest');
const request = session(app);

const character = {
    id:923,
    name: 'Dai',
    species: 'Human',
    gender: 'Female',
    status: 'Alive',
    origin: {
        name: 'Earth (C-137'
    },
    image: 'image.jpg'
}



describe("test de RUTAS", () => {

    describe("GET /rickandmorty/character/:id", () => {
        it('Responde con status: 200', async () => {
            //await request.get('rickandmorty/character/1').expect(200)
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);

        })

        it("Responde un objeto con las propiedades: 'id', 'name', 'species','gender', 'status', 'origin' e 'image'", async () => {
           
            const response = await request.get('/rickandmorty/character/1');
            // expect(response.body).toHaveProperty('id');
            // expect(response.body).toHaveProperty('name');
            // expect(response.body).toHaveProperty('species');
            // expect(response.body).toHaveProperty('gender');
            // expect(response.body).toHaveProperty('status');
            // expect(response.body).toHaveProperty('origin');
            // expect(response.body).toHaveProperty('image');

            const props = ['id','name','species','gender','status','origin','image']
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop)
            })  

        });

        it('Si hay un eror responde con status: 500', async () => {
            //await request.get('rickandmorty/character/1').expect(200)
            const response = await request.get('/rickandmorty/character/3209');
            expect(response.statusCode).toBe(500);

        })

    })


    describe("GET /rickandmorty/login", () => {
        it("Responde con un objeto con la propiedad access en TRUE si la información del usuario ES válida", async () => {
            const response = await request.get('/rickandmorty/login?email=javier@gmail.com&password=123asd');
            const access = { access : true};
            expect(response.body).toEqual(access);
        })


        it("Responde con un objeto con la propiedad access en FALSE si la información del usuario NO es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=javier@gmail.com&password=123aasdd');
            const access = { access : false};
            expect(response.body).toEqual(access);
        })

    })


    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {

            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character);
        })

        it("Debe agregar personajes a favoritos sin eliminar lo que ya existían", async () => {

            character.id=1923;
            character.name= 'FT 37a';
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        })

    })




    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si ID solicitado no existe, debe retornar un arreglo con todos los favoritos", async () => {

            const response = await request.delete('/rickandmorty/fav/22dfs').send(character);
            expect(response.body.length).toBe(2);
        })

        it("Si ID enviado existe, debe eliminarlo de los favoritos", async () => {

            const response = await request.delete('/rickandmorty/fav/1923').send(character);
            expect(response.body.length).toBe(1);
        })
      

    })

})