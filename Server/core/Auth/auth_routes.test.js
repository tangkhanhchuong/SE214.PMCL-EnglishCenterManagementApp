const supertest = require('supertest')

const db = require('../Database/postgres_connector')
const app = require('../app')

describe('POST /auth/login', () => {
	test("username and password should be correct", async () => {
		const user = {username: "admin", password: "password"}

		await supertest(app)
			.post("/auth/login")
			.send(user)
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(200)
	})

	test("username should be in database", async () => {
		const user = {username: "admi", password: "password"}

		await supertest(app)
			.post("/auth/login")
			.send(user)
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(409)
	})

	test("password should be correct", async () => {
		const user = {username: "admin", password: "passwor"}

		await supertest(app)
			.post("/auth/login")
			.send(user)
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(401)
	})

	test("username and password should not be empty", async () => {
		const user = {username: "", password: ""}

		await supertest(app)
			.post("/auth/login")
			.send(user)
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(401)
	})
})

beforeEach(async () => {
    await db('accounts').where('username', 'cauvang').del()
})

describe('POST /auth/signup', () => {
	test("username should not exist in database", async () => {
		const user = {username: "admin", password: "dafeeqqe"}

		await supertest(app)
			.post("/auth/signup")
			.send(user)
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(403)
	})

	test("account should be created if username and password are valid", async () => {
		const user = {username: "cauvang", password: "cauvang"}

		await supertest(app)
			.post("/auth/signup")
			.send(user)
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(201)
	})
})