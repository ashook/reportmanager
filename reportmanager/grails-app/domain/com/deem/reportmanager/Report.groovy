package com.deem.reportmanager


import grails.rest.*

@Resource(uri='/reports', readOnly = false, formats = ['json', 'xml'])
class Report {
	
	long id
	String name
	String description
	String businessUnit
	String purpose
	String role
	String type
	String frequency
	String outputFormat
	String outputProtocol
	String outputLocation
	String inputLocation
	String etlTool
}