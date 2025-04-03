import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
export const runtime = "edge";

export async function GET(req: NextRequest) {
	try {
		const ip = req.headers.get("x-forwarded-for") || "unknown_ip";
		if (ip === "unknown_ip") return NextResponse.json({ count: 0 });

		const key = `visit:${ip}`;
		const lastVisit = await redis.get(key);

		if (!lastVisit) {
			await redis.set(key, Date.now(), { ex: 300 });
			await redis.incr("visit_count");
		}

		const count = parseInt((await redis.get("visit_count")) ?? "0", 10);
		return NextResponse.json({ count });
	} catch (error) {
		console.error("Redis Error:", error);
		return NextResponse.json({ count: 0 }, { status: 500 });
	}
}
