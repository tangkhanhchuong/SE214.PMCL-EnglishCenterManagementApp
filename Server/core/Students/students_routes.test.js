const supertest = require('supertest')

const db = require('../Database/postgres_connector')
const app = require('../app')


describe('GET /students', () => {
	test("students data should be an array", async () => {
		await supertest(app)
			.get("/students")
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(200)
            .then(res => {
                expect(Array.isArray(res.body.data.students)).toBe(true)
            })
	})

    test("students count should be a number", async () => {
		await supertest(app)
			.get("/students")
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(200)
            .then(res => {
                expect(Number.isNaN(res.body.data.count)).toBe(false)
            })
	})
})

describe('GET /students/:id', () => {
    test("student data should not be null if student information is in database", async () => {
		await supertest(app)
			.get(`/students/STU-56032`)
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(200)
            .then(res => {
                expect(typeof res.body.data.student === 'object').toBe(true)
            })
	})
})

beforeEach(async () => {
    const [student] = await db('students')
        .join('personal_information as info', 'info.info_id', 'students.info_id')
        .where('name', 'vuong thien nhat').select()

    if(!student || !student.student_id)    return 
    await db('student_class').where('student_id', student.student_id).del()
    await db('students').where('student_id', student.student_id).del()
})

describe('POST /students', () => {
    test("student should be created", async () => {
		await supertest(app)
			.post(`/students`)
            .send({ 
                name: "vuong thien nhat", 
                gender: "Male", 
                dob: "March 12, 2020", 
                phone: "091845432", 
                email: "thiennhat@gmail.com", 
                address: "Hang Chau, Trung Quoc", 
                avatar_url: "" 
            })
			.set("Accept", 'application/json')
			.expect("Content-Type", /json/)
			.expect(201)
	})
})


