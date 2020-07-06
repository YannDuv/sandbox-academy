class Logger {
    log(message: string): void {
        console.log(message)
    }
}

export const LoggerService = new Logger()