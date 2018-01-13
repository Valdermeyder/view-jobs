import {getAllJobs, getJob, jobs} from "./jobsRetriever";

describe('#getAllJobs', () => {
	test('should return dummy jobs', () => {
		expect(getAllJobs()).toBe(jobs)
	})
})

describe('#getJob', () => {
	test('should return job when it is present in dummy jobs', () => {
		expect(getJob(jobs[0].id)).toBe(jobs[0])
	})

	test('should return job when it is present in dummy jobs and id is string', () => {
		expect(getJob(`${jobs[0].id}`)).toBe(jobs[0])
	})

	test('should return undefined when jobs id is not present in dummy jobs', () => {
		expect(getJob(3)).toBeUndefined()
	})
})
