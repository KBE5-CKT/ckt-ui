export interface DrivingHistorySummary {
	id: number;
	modelName: string;
	carNumber: string;
	startTime: string;
	endTime: string;
	startMileage: string;
	endMileage: string;
	totalDistance: string;
	user: string;
	operationType: {
			label: string;
			color: string;
	};
	note: string;
}
