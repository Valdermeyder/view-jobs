import {generateJobs, generateJob} from './jobGenerator';

export const getAllJobs = () =>
	generateJobs(4)

export const getJob = id =>
	generateJob(id)
